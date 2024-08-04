export interface CartItem {
    id : number;
    quantity : number;
    price: number | null;
    name: string | null;
    image: string | null;
    description: string | null;
}
