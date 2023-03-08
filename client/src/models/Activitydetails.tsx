export default interface ActivityDetails{
    id: number;
    attributes: {
        image: any;
        event: React.ReactNode;
        name: string;
        location: string;
        categories: {
            data: [
                {
                    id: number;
                    attributes: {
                        name : string;
                    };
                }
            ];
        };
        cover: {
            data: {
                id: number;
                attributes: {
                    name: string;
                };
            };
        };
        activity_date: {
            data: {
                attributes: {
                    first_date: string;
                    end_date: string;
                    event: string;
                };
            };
        };
    };
  }
  