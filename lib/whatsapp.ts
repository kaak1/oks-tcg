import type { Product } from "@/data/products";

export const WHATSAPP_NUMBER = "60103138771";

export function formatRM(amount: number) {
  return amount.toFixed(2);
}

export function generateWhatsAppOrderLink(product: Product, quantity: number) {
  const safeQuantity = Math.max(1, Math.floor(quantity));
  const total = product.price * safeQuantity;
  const message = `你好，我想购买以下商品：

商品名称：${product.name}
商品编号：${product.sku}
单价：RM${formatRM(product.price)}
数量：${safeQuantity}
合计：RM${formatRM(total)}

请帮我确认库存和邮费，谢谢。`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppContactLink() {
  const message = "你好，我想咨询 OKS-TCG 的现货商品和下单方式。";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
