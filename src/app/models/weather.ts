export class Weather {
    today: {
        temperature: number,
        text: string,
        icon: number,
        mobileLink: string,
        link: string
    }
    forecast: [
        {
            date: string,
            temperature: string,
            text: string,
            icon: number,
            mobileLink: string,
            link: string
        },
    ]
}

