export default interface Activity {
    id: number|string;
        attributes: {
            cover: any;
            event: number,
            name: string,
            description: string,
            location: string,
            catagories: {
                        id: string|number;
                        attributes: {
                            name: string,
                            }
                        }
                },
            cover: {
                    id: number|string;
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string;
                            },
                        }
                    }
                }
}