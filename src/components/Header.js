import React from "react";

const Header = () => {
	return (
		<div className="flex flex-row justify-between items-center px-5 py-1 w-full bg-black border-b border-solid border-b-[color:var(--Secondary-Grey-3,#333)]">
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
			<div className="hidden xl:inline-flex ">
				<div className="flex gap-5 justify-between items-center px-3 py-1 my-auto text-base font-light leading-7 text-center text-white bg-zinc-900 rounded-[100px]">
					<div className="my-auto px-5 py-2.5 whitespace-nowrap">
						<a href="#about">The Company</a>
					</div>
					<div className="my-auto px-5 py-2.5 whitespace-nowrap">
                    <a href="#services">Our Services</a>
					</div>
					<div className="my-auto px-5 py-2.5 whitespace-nowrap">
                    <a href="#expertise">Our Expertise</a>
					</div>
					<div className="my-auto px-5 py-2.5 whitespace-nowrap">
                    <a href="#work">Client Work</a>
					</div>
				</div>
			</div>
			<div className="hidden md:inline-flex justify-center w-1/5 px-10 py-3.5 my-auto text-base leading-7 text-center text-white whitespace-nowrap border border-solid border-[color:var(--Primary-White,#FFF)] rounded-[100px] max-md:px-5">
            <a href="#engage">Engage Us</a>
			</div>
		</div>
	);
};

export default Header;
