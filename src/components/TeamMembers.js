import React, { useState } from "react";
import styles from "../styles/TeamMembers.module.css";

const TeamMembers = ({ image, name, position, bio }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
        className={styles.teamMember}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div className={styles.imageContainer}>
            <img src={image} alt={`${name}`} className={styles.image} />
        </div>
        <div className={styles.infoContainer}>
            {!isHovered ? (
                <>
                    <h3 className={styles.name}>
                        {name}
                    </h3>
                    <h4 className={styles.position}>
                        {position}
                    </h4>
                </>
            ) : (
                <p className={styles.bio}>
                    {bio}
                </p>
            )}
        </div>
    </div>
  );
};

export default TeamMembers;
