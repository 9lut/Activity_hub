export default interface Activity {
    id: number|string;
        attributes: {
            name: string,
            description: string,
            location: string,
            catagories: {
                        id: string|number;
                        attributes: {
                            name: string,
                            }
                        },
            cover: {
                data: {
                    id: number|string;
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string;
                            },
                        }
                    }
                },
            }
            activity_date: {
                data :{
                    attributes: {
                        First_date: string;
                        End_date: string;
                        event: string;
                    }
                }
            }
        }
}