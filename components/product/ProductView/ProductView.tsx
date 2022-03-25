import cn from "classnames";
import { FC, useState } from "react";
import s from "./ProductView.module.css";
import { Button, Container } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import ProductSlider from "../ProductSlider";
import Swatch from "../Swatch";
import { Choices, getVariant } from "../helpers";
import { useUI } from "@components/ui/context";
import useAddItem from "@framework/cart/use-add-item";

interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setChoices] = useState<Choices>({});

  const variant = getVariant(product, choices);

  const { openSidebar } = useUI();
  const addItem = useAddItem();

  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: String(variant?.id),
        variantOptions: variant?.options,
        quantity: 1,
      };
      const output = await addItem(item);
      debugger;
      alert(JSON.stringify(output));
      openSidebar();
    } catch {}
  };
  return (
    <Container>
      <div className={cn(s.root, "fit", "mb-5")}>
        <div className={cn(s.productDisplay, "fit")}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value} {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((img) => (
              <div key={img.url} className={s.imageContainer}>
                <Image
                  className={s.img}
                  src={img.url}
                  alt={img.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((option) => (
              <div className="pb-4" key={option.id}>
                <h2 className="font-medium uppercase">{option.displayName}</h2>
                <div className="flex flex-row py-4">
                  {option.values.map((optValue) => {
                    const activeChoice =
                      choices[option.displayName.toLowerCase()];
                    return (
                      <Swatch
                        key={`${option.id}-${optValue.label}`}
                        label={optValue.label}
                        color={optValue.hexColor}
                        variant={option.displayName}
                        active={optValue.label.toLowerCase() === activeChoice}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]:
                              optValue.label.toLowerCase(),
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="w-full max-w-xl text-lg break-words pb-14">
              {product.description}
            </div>
          </section>
          <div>
            <Button className={s.button} onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
