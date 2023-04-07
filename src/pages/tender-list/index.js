import Navbar from '@/components/navbar';
import React from 'react';
import MainLayout from '@/layouts/mainLayout';

export function TenderList() {
	return (
		<div class="max-w-1xl mx-auto px-4 py-6 ">
			<div className="mx-auto px-auto"></div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="">
					<p className="text-end">Click here to delete project</p>
					<p>CS:GO Gambling Website - 36345790</p>
					<div>
						<p>04/05/2023 09:32:21</p>
						<p>
							dsaaaaaaaaaaaaaaaaaaăqeqeqưe ađáqưe e qưe qưe qư eqư eqư e qưe qưe qe21312 e12 e12 e 12e 12
							e12 e12 e12 e1 2e 1e 12e 12e 12e ew ew qe qư e qưe qưe 21 e1 e ưe q ewq ewq e12 e 1e 12
						</p>
						<textarea
							id="about"
							name="about"
							rows={3}
							className="outline-none bg-gray-50 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
							defaultValue={''}
						/>
						<div class="mb-2 mt-2">
							<label
								for="default-input"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Budget
							</label>
							<input
								type="text"
								id="default-input"
								class="outline-none sm:text-sm sm:leading-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
							/>
						</div>
						<p>PHP ,JavaScript ,CSS ,HTML5 ,Steam API</p>
						<div class="mb-2 mt-2">
							<button
								type="submit"
								className="block w-auto rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Send Token
							</button>
						</div>
					</div>
				</div>
				<div className="bg-slate-50">02</div>
				<div className="bg-slate-50">03</div>
				<div className="bg-slate-50">09</div>
				<div className="bg-slate-50">09</div>
				<div className="bg-slate-50">09</div>
				<div className="bg-slate-50">09</div>
				<div className="bg-slate-50">09</div>
				<div className="bg-slate-50">09</div>
				<div className="bg-slate-50">09</div>
			</div>
		</div>
	);
}
export default function MainTenderList() {
	return <MainLayout Children={<TenderList />} />;
}
