import Navbar from '@/components/navbar';

function MainLayout({ Children }) {
	return (
		<div className="bg-white dark:bg-gray-900 min-h-screen">
			<Navbar></Navbar>
			{Children}
		</div>
	);
}

export default MainLayout;
