export class Products 
{
    price: string;
    latestReviewDate:string;
    domain: string; 
    imageUrl: string;
    name: string;
    title: string;
    category: string;
    productId: string;
    createdAt:string;
   reviewCount: number;
   topScores: TopScore[];

   
   constructor(){}
}
class TopScore{
    topic:string;
    score:number;
}
