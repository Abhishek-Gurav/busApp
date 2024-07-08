export const siteConfig = {
	name: "BusTicket",
	description: "Book bus tickets for least price and cancel anytime ",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		docs: "https://nextui.org",
	},
};

export const busSchedule = [
	{
	  From: "Station A",
	  To: [
		{
		  time: "08:00",
		  departure: "08:10",
		  arrival: "09:00",
		  duration: "50 min",
		  busId: "BUS123",
		  busName: "City Express",
		  station: "Station B",
		  days: ["Mon", "Wed", "Fri"],
		  price: 10, // Price for this bus
		},
		{
		  time: "10:00",
		  departure: "10:15",
		  arrival: "11:00",
		  duration: "45 min",
		  busId: "BUS456",
		  busName: "Green Line",
		  station: "Station B",
		  days: ["Tue", "Thu", "Sat"],
		  price: 12, // Price for this bus
		},
	  ],
	},
	{
	  From: "Station B",
	  To: [
		{
		  time: "09:00",
		  departure: "09:15",
		  arrival: "10:00",
		  duration: "45 min",
		  busId: "BUS789",
		  busName: "Blue Arrow",
		  station: "Station C",
		  days: ["Tue", "Thu", "Sat"],
		  price: 15, // Price for this bus
		},
		{
		  time: "12:00",
		  departure: "12:15",
		  arrival: "13:00",
		  duration: "45 min",
		  busId: "BUS012",
		  busName: "Rapid Route",
		  station: "Station A",
		  days: ["Mon", "Wed", "Fri"],
		  price: 8, // Price for this bus
		},
	  ],
	},
	// Additional dummy data
	{
	  From: "Station C",
	  To: [
		{
		  time: "14:00",
		  departure: "14:15",
		  arrival: "15:00",
		  duration: "45 min",
		  busId: "BUS345",
		  busName: "Sunshine Shuttle",
		  station: "Station D",
		  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		  price: 20, // Price for this bus
		},
	  ],
	},
	{
	  From: "Station D",
	  To: [
		{
		  time: "16:00",
		  departure: "16:15",
		  arrival: "17:00",
		  duration: "45 min",
		  busId: "BUS678",
		  busName: "Moonlight Express",
		  station: "Station E",
		  days: ["Mon", "Wed", "Fri"],
		  price: 18,
		},
	  ],
	},
  ];