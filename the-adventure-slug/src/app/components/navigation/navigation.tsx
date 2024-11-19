import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface LinkItem {
	label: string;
	href: Url;
}


export default function Navigation() {
	const links: LinkItem[] = [
		{
			label: "Adventure",
			href: "/adventures"
		},
		{
			label: "Code",
			href: "/code"
		},
		{
			label: "Thoughts",
			href: "/thoughts"
		},
		{
			label: "Recipes",
			href: "/recipes"
		},
		{
			label: "Portfolio",
			href: "https://www.zoeb.codes/"
		}
	]

	return (
		<Navbar className='bg-gray-800 content-right relative flex h-16 items-center justify-end flex-row-reverse'>
			<NavbarContent className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
				{
					links.map(link => {
						return (
							<NavbarItem key={link.label} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-2xl">
								<Link href={link.href}>
									{link.label}
								</Link>
							</NavbarItem>
						)
					})
				}

			</NavbarContent>
		</Navbar>
	);
}