"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Upload, X } from "lucide-react";
import Image from "next/legacy/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Uploader() {
	const [file, setFile] = useState<File | null>(null);
	const [preview, setPreview] = useState<string | null>(null);

	const onDrop = useCallback((acceptedFiles: File[]) => {
		const selectedFile = acceptedFiles[0];
		setFile(selectedFile);

		const reader = new FileReader();
		reader.onload = () => {
			setPreview(reader.result as string);
		};
		reader.readAsDataURL(selectedFile);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".jpeg", ".jpg", ".png", ".gif"],
		},
		multiple: false,
	});

	const handleUpload = () => {
		// ここで実際のアップロード処理を行います
		console.log("Uploading file:", file);
	};

	const handleRemove = () => {
		setFile(null);
		setPreview(null);
	};

	return (
		<Card className="w-full max-w-md mx-auto">
			<CardContent className="p-6">
				<div
					{...getRootProps()}
					className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
						isDragActive
							? "border-primary bg-primary/10"
							: "border-gray-300 hover:border-primary"
					}`}
				>
					<input {...getInputProps()} />
					{preview ? (
						<div className="relative">
							<Image
								src={preview || "https://ui.shadcn.com/placeholder.svg"}
								alt="Preview"
								className="max-w-full h-auto rounded"
								width={500}
								height={500}
							/>
							<button
								type="button"
								onClick={(e) => {
									e.stopPropagation();
									handleRemove();
								}}
								className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
							>
								<X className="h-4 w-4 text-gray-600" />
							</button>
						</div>
					) : (
						<div className="text-center">
							<Upload className="mx-auto h-12 w-12 text-gray-400" />
							<p className="mt-2 text-sm text-gray-500">
								{isDragActive
									? "ドロップしてアップロード"
									: "クリックまたはドラッグ＆ドロップで画像をアップロード"}
							</p>
						</div>
					)}
				</div>
				{file && (
					<div className="mt-4">
						<p className="text-sm text-gray-500 mb-2">{file.name}</p>
						<Button onClick={handleUpload} className="w-full">
							<Upload className="mr-2 h-4 w-4" />
							アップロード
						</Button>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
