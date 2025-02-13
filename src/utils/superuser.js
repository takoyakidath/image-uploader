import PocketBase from "pocketbase";

const superuserClient = new PocketBase(
	"http://backend-pocketbase-a08a35-202-212-71-220.traefik.me/",
);

// disable autocancellation so that we can handle async requests from multiple users
superuserClient.autoCancellation(false);

// option 1: authenticate as superuser using email/password (could be filled with ENV params)
await superuserClient
	.collection("_superusers")
	.authWithPassword(SUPERUSER_EMAIL, SUPERUSER_PASS, {
		// This will trigger auto refresh or auto reauthentication in case
		// the token has expired or is going to expire in the next 30 minutes.
		autoRefreshThreshold: 30 * 60,
	});

// option 2: OR authenticate as superuser via long-lived "API key"
// (see https://pocketbase.io/docs/authentication/#api-keys)
superuserClient.authStore.save("YOUR_GENERATED_SUPERUSER_TOKEN");

export default superuserClient;
