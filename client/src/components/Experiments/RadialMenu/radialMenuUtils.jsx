import { Plus, Wallet, ShoppingCart, User, Heart } from "lucide-react";
function calculateAngle(A, B, C) {
  const AB = { x: B.x - A.x, y: B.y - A.y };
  const BC = { x: C.x - B.x, y: C.y - B.y };

  const dotProduct = AB.x * BC.x + AB.y * BC.y;

  const magnitudeAB = Math.sqrt(AB.x * AB.x + AB.y * AB.y);
  const magnitudeBC = Math.sqrt(BC.x * BC.x + BC.y * BC.y);

  const angleRadians = Math.acos(dotProduct / (magnitudeAB * magnitudeBC));

  const angleDegrees = angleRadians * (180 / Math.PI);

  return angleDegrees;
}

const calculateDistance = (A, B) => {
  return Math.sqrt((A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y));
};

const triggerVariant = {
  open: {
    transform: "rotate(-45deg)",
    color: "white",
    backgroundColor: "black",
  },
  closed: {
    transform: "rotate(0deg)",
    color: "black",
    backgroundColor: "black",
  },
};
const MENU_OPTIONS = [
  { icon: <Wallet size={24} className="rm-icon" />, label: "Wallet" },
  { icon: <ShoppingCart size={24} className="rm-icon" />, label: "Cart" },
  { icon: <Heart size={24} className="rm-icon" />, label: "Wishlist" },
];

export { calculateAngle, triggerVariant, MENU_OPTIONS, calculateDistance };
