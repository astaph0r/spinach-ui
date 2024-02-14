import React from "react";

const Header = () => {
	return (
		<div className="flex flex-row justify-between items-center  px-5 py-1 w-full bg-black border-b border-solid border-b-[color:var(--Secondary-Grey-3,#333)]">
			<div className="flex justify-between">
				<img
					loading="lazy"
                    alt="dsdsd"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/d93fdc312a0d99e170210dd4abc96261b59f84f7e7b1922a7298a663d6c73cc7?"
					className="my-auto"
				/>
				<img
					loading="lazy"
                    alt="sds,ds"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d4c5a86b466c0ceb39840b241aa48f89b6eb257013fea3c6f70ceb8b1000b8c?"
					className="flex-1 w-full"
				/>
			</div>
			<div className="flex gap-5 justify-between items-center px-3 py-1 my-auto text-base font-light leading-7 text-center text-white bg-zinc-900 rounded-[100px]">
				<div className="my-auto whitespace-nowrap">
					The Company
				</div>
				<div className="flex justify-between px-10 py-2.5 whitespace-nowrap bg-black rounded-[100px]">
					<div className="">Our Services</div>
					<img
						loading="lazy"
                        alt="mdkmfkdm"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdeee2e320fcc7b4445fb1fc9cbba2adc214d306e5d271e6990a0edc436a5dea?"
						className="my-auto w-3 ml-3 aspect-square"
					/>
				</div>
				<div className="my-auto whitespace-nowrap">
					Our Expertise
				</div>
				<div className="my-auto whitespace-nowrap">
					Client Work
				</div>
			</div>
			<div className="justify-center w-1/5 px-10 py-3.5 my-auto text-base leading-7 text-center text-white whitespace-nowrap border border-solid border-[color:var(--Primary-White,#FFF)] rounded-[100px] max-md:px-5">
				Engage Us
			</div>
		</div>
	);
};

export default Header;
