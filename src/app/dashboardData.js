import { Calendar1, CircleDot, Headset, LayoutDashboard, Settings, UserPlus, Users } from "lucide-react"

const cardsData = [
    {
        id:1,
        title:"Available Position",
        value:24,
        remarks: "4 urgently Needed"
    },
    {
        id:2,
        title:"Job Open",
        value:10,
        remarks: "4 Active hiring"
    },
    {
        id:3,
        title:"New Employees",
        value:24,
        remarks: "4 Department"
    },
]

const graphCardData = [
    {
        id: 12,
        title: 'Total Employees',
        value: 216,
        demography: {men: 120, women:96},
        remark: `+2% Past month`
    },
    {
        id: 13,
        title: 'Talent Requests',
        value: 16,
        demography: {men: 6, women:10},
        remark: `+5% Past month`
    },
]

const announcements = [
    {
        title: 'Outing schedule for every departement',
        timeline:  '5 Minutes ago'
    },
    {
        title: 'Meeting HR Department',
        timeline:  'Yesterday, 12:30 PM'
    },
    {
        title: 'IT Department need two more talents for UX/UI Designer position',
        timeline:  'Yesterday, 09:15 AM'
    },
]



const sideNavMain = [
    {
        id:1,
        title:"Dashboard",
        icon:  <LayoutDashboard />,
        url:"/dashboard"
    },
    {
        id:2,
        title:"Recruitment",
        icon:<UserPlus />,
        url:"/recruitment"
    },
    {
        id:3,
        title:"Schedule",
        icon:<Calendar1 />,
        url:"/schedule"
    },
    {
        id:4,
        title:"Employee",
        icon:<Users />,
        url:"/employee"
    },
    {
        id:5,
        title:"Department",
        icon:<CircleDot />,
        url:"/department"
    },  
]

const sideNavOther = [
    {
        id:6,
        title:"Support",
        icon:<Headset />,
        url:"/support"
    },
    {
        id:7,
        title:"Settings",
        icon:<Settings />,
        url:"/settings"
    }

]


export {cardsData,sideNavMain, sideNavOther, graphCardData, announcements}