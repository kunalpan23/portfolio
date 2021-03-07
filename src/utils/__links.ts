import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

interface List {
    link: string;
    label: string;
    icon: any;
}

export default function generateLinkOuts() : Array<List> {
    return [
        {
            link: "https://github.com/kunalpan23",
            label: "Github",
            icon: faGithub
        },
        {
            link: "https://stackoverflow.com/users/11551615/kunal-panchal",
            label: "StackOverflow",
            icon: faStackOverflow
        }
    ]
}