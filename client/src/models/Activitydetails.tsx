interface Category {
    id: number;
    name: string;
  }
  
  interface CoverImage {
    id: number;
    name: string;
  }
  
  interface ActivityDate {
    first_date: string;
    end_date: string;
    event: string;
  }
  
  interface Activity {
    [x: string]: any;
    id: number;
    image: any;
    event: string;
    name: string;
    location: string;
    categories: Category[];
    cover: CoverImage;
    activity_date: ActivityDate;
  }
  
  export default Activity;
  