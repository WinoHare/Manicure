import Link from "next/link";
import Image from "next/image";

type IconLinkProps = {
	to: string
	src: string
	alt: string
	width: number
	height: number
	title?: string
}

export default function IconLink({to, src, alt, height, width, title}: IconLinkProps) {
	return <Link href={to}><abbr title={title}><Image src={src} alt={alt} width={width} height={height}/></abbr></Link>
}