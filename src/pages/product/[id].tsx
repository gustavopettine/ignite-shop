import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>T-shirt X</h1>

        <span>$79,90</span>

        <p>As nice as a hug, our products are made from the purest and finest Brazilian cotton, ideal for climates from North to South. All colors are 100% cotton, except the mixed gray ones, which are 88% cotton and 12% polyester.</p>

        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  )
}
