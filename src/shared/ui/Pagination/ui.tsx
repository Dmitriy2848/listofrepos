import { FC } from 'react';

import { ReactComponent as Chevron } from 'shared/assets/chevron-right.svg';
import { usePagination } from 'shared/ui/Pagination/lib';

interface IPaginationProps {
	onPageChange: (x: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
}

const Pagination: FC<IPaginationProps> = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize
}) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize
	});
	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};
	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	const currentPageStyles =
		'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700';

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<nav>
			<ul className='mx-auto flex items-center h-7 divide-x select-none'>
				<li
					aria-disabled={currentPage === 1}
					className='h-full px-2.5 py-2 border-gray-300 border-y border-r rounded-r-lg fill-gray-500 hover:fill-gray-700 hover:bg-gray-100 cursor-pointer aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none rotate-180'
					onClick={onPrevious}
				>
					<Chevron />
				</li>
				{paginationRange.map((num, i) => {
					if (typeof num === 'string') {
						return (
							<li
								key={i}
								className='cursor-pointer h-full px-3 py-2 leading-3 border-y text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'
							>
								...
							</li>
						);
					} else {
						return (
							<li
								key={i}
								className={`cursor-pointer h-full px-2 ${
									currentPage === num
										? currentPageStyles
										: 'text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
								}`}
								onClick={() => onPageChange(num)}
							>
								{num}
							</li>
						);
					}
				})}
				<li
					aria-disabled={currentPage === lastPage}
					className='h-full px-2.5 py-2 border-gray-300 border-y border-r rounded-r-lg fill-gray-500 hover:fill-gray-700 hover:bg-gray-100 cursor-pointer aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none'
					onClick={onNext}
				>
					<Chevron />
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
