import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import NavbarMobile from "../components/NavbarMobile";
import NavigationBar from "../components/Navbar";
import Footer from "../components/footer";
import BukuStore from "../components/BukuStore";

export default function Books() {
	return (
		<div>
			<div>
				<BottomNav />
			</div>
			<div className="">
				<NavigationBar />
				<NavbarMobile />
				<BukuStore />
			</div>
			<hr className="sm:mb-10 text-black border" />
			<Footer />
		</div>
	);
}
