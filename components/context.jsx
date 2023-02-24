import { useContext,createContext,useState } from "react";

const CollisionContext = createContext();

export function useCollision() {
  return useContext(CollisionContext);
}

export function CollisionProvider({ children }) {
  const [collision, setCollision] = useState(false);

  function checkCollision(positionDino, positionCactus) {
    const isCollision = positionDino==positionCactus;
    setCollision(isCollision);
  }

  return (
    <CollisionContext.Provider value={{ collision, checkCollision }}>
      {children}
    </CollisionContext.Provider>
  );
}