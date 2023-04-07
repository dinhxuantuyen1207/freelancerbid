import Navbar from '@/components/navbar';
import React from 'react';
import MainLayout from '@/layouts/mainLayout';

export function SubmitToken() {
	return (
		<div class="max-w-3xl mx-auto px-4 py-6 ">
			<div className="mx-auto px-auto">
				<div class="mb-6 mt-6">
					<label
						for="default-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						GETAFREE_AUTH_HASH_V2
					</label>
					<input
						type="text"
						id="default-input"
						class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
					/>
				</div>
				<div class="mb-6 mt-6">
					<label
						for="default-input"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						XSRF-TOKEN
					</label>
					<input
						type="text"
						id="default-input"
						class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
					/>
				</div>
				<div class="mb-6 mt-8	">
					<button
						type="submit"
						className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Send Token
					</button>
				</div>
			</div>
		</div>
	);
}
export default function MainSubmitToken() {
	return <MainLayout Children={<SubmitToken />} />;
}
