import styles from "../styles.module.css";

const AuthFormHeader = ({ heading }) => {
   return (
      <div>
         <h2 className={styles.formHeading}>{heading}</h2>
         <hr />
      </div>
   );
};

export default AuthFormHeader;
