// import { Link } from "@nextui-org/link";
import {Input} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import {Button} from "@nextui-org/react";
import { CalendarForm } from "@/components/Form";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-32 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Book&nbsp;</h1>
				<h1 className={title({ color: "violet" })}> bus &nbsp;</h1>
				<br />
				<h1 className={title()}>
					tickets for least price and cancel anytime
				</h1>
			</div>

			<CalendarForm />
		</section>
	);
}