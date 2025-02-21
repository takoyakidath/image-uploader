export default async function logout() {
	await supabase.auth.signOut();
}
