
interface MinimumPrice {
    __typename: string
    final_price?: CurrencyValue //to check
    regular_price: CurrencyValue
    discount?: Discount //to check
}

interface Discount {
    __typename: string
    amount_off: number
    percent_off: number
}

interface CurrencyValue {
    __typename: string
    currency: string
    value: number
}

interface PriceRange {
    __typename: string;
    minimum_price: MinimumPrice;
}

interface BrandInfo {
    __typename: string;
    img_src: string
    title: string;
    url: string;
}

interface ComplexTextValue {
    __typename: string;
    html: string;
}

interface CrossBorderProduct {
    __typename: string;
    disallow_countries: string;
    is_allowed: boolean;
}

interface ProductLabel {
    __typename: string;
    active_from: string;
    active_to: string;
    background_color: string;
    label_id: number | null;
    label_text: string;
    name: string;
    text_color: string;
}

type RegularPrice = {
    __typename: string;
    amount: CurrencyValue
};

interface ProductPrices {
    __typename: string;
    regularPrice: RegularPrice;
}

interface ProductReviews {
    __typename: string;
    items: any[]; // Define this based on your data structure
    page_info: any; // Define this based on your data structure
}

interface ProductImage {
    __typename: string;
    url: string;
}

export interface SimpleProduct {
    __typename: string;
    amrma_default_resolution_period: number;
    base_price_range: PriceRange;
    brand: number;
    brand_info: BrandInfo;
    categories: any[]; // Define this based on your data structure
    cautions: string;
    cross_border_product: CrossBorderProduct;
    description: ComplexTextValue;
    dimensions: string;
    features: string;
    id: number;
    is_yalla: any[]; // Define this based on your data structure
    language: string;
    media_gallery_entries: any[]; // Define this based on your data structure
    meta_description: string;
    meta_title: string;
    name: string;
    options: any; // Define this based on your data structure
    pkgdimensions: string;
    price: ProductPrices;
    price_range: PriceRange;
    product_label: ProductLabel;
    rating_summary: number;
    recom_age: string;
    redirect_code: number;
    relative_url: string;
    review_count: number;
    reviews: ProductReviews;
    shipping_weight: any; // Define this based on your data structure
    sku: string;
    small_image: ProductImage;
    stock_status: string;
    type: string;
    uid: string;
    url_key: string;
    usd_price_range: PriceRange;
    weight: number;
}
