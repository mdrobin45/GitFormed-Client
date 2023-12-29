import styles from "./styles.module.css";

const SubmitButton = ({ btnText }) => {
   return (
      <button type="submit" className={styles.submitBtn} size="lg">
         {btnText}
      </button>
   );
};

export default SubmitButton;
