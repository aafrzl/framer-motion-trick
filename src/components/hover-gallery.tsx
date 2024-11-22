import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Element = {
  id: number;
  bg: string;
  img: string;
};

const items = [
  {
    elements: [
      {
        id: 1,
        bg: "#22c55e",
        img: "https://images.pexels.com/photos/28921096/pexels-photo-28921096/free-photo-of-colorful-architecture-in-guanajuato-mexico.jpeg",
      },
      {
        id: 2,
        bg: "#ef4444",
        img: "https://images.pexels.com/photos/28193003/pexels-photo-28193003/free-photo-of-dusk-panoramic-aerial-view-of-monaco.jpeg",
      },
      {
        id: 3,
        bg: "#eab308",
        img: "https://images.pexels.com/photos/29014372/pexels-photo-29014372/free-photo-of-scenic-coastal-landscape-with-mountains-and-sea.jpeg",
      },
    ],
  },
];

export default function HoverGallery() {
  const [isHovering, setIsHovering] = useState(false);

  const allElements = items.flatMap((item) => item.elements);
  const elements = [
    ...allElements,
    {
      id: 4,
      bg: "#3b82f6",
      img: "https://images.pexels.com/photos/29216715/pexels-photo-29216715/free-photo-of-vintage-bicycles-against-rustic-brick-wall.jpeg",
    },
  ];

  return (
    <div className="size-full center">
      <motion.div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="size-[500px] border rounded-2xl px-4 py-5 relative overflow-hidden"
      >
        <motion.div
          className="w-full h-full gap-2 flex flex-col items-start justify-center"
          layout
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {items.map((item, index) => (
            <motion.div
              className="flex flex-col items-center justify-center gap-10 w-full h-full"
              layout
              animate={{ opacity: isHovering ? 0 : 1, willChange: "auto" }}
              key={index}
            >
              <div className="rounded-2xl cursor-pointer grid place-items-center flex-[2] w-full">
                {item.elements.map((item, index) => (
                  <Gallery
                    key={item.id}
                    item={item}
                    index={index}
                  />
                ))}
              </div>
              <motion.div
                layoutId={`box-4`}
                className="rounded-2xl cursor-pointer center overflow-hidden border h-full w-full flex-1"
              >
                <img
                  src="https://images.pexels.com/photos/29216715/pexels-photo-29216715/free-photo-of-vintage-bicycles-against-rustic-brick-wall.jpeg"
                  alt="gallery"
                  className="size-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {isHovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, willChange: "auto" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                className="grid grid-cols-2 gap-4 justify-center items-center h-full w-full p-4"
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {elements.map((item, index) => (
                  <motion.div
                    key={index}
                    className="rounded-2xl cursor-pointer center overflow-hidden border h-full"
                    layoutId={`box-${item.id}`}
                  >
                    <img
                      src={item.img}
                      alt="gallery"
                      className="size-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

const Gallery = (props: { item: Element; index?: number }) => {
  return (
    <motion.div
      layoutId={`box-${props.item.id}`}
      className="rounded-2xl center border h-[80%] w-[80%] max-h-[222px] origin-center overflow-hidden"
      animate={{
        rotate: props.index === 0 ? -12 : props.index === 2 ? 12 : undefined,
      }}
      style={{
        gridRow: 1,
        gridColumn: 1,
        backgroundColor: props.item.bg,
      }}
    >
      <img
        src={props.item.img}
        className="size-full object-cover"
      />
    </motion.div>
  );
};
