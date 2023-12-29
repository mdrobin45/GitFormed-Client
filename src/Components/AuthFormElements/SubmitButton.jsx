import { Button } from "@material-tailwind/react";
import styles from "./styles.module.css";

const SubmitButton = ({ btnText }) => {
   return (
      <Button type="submit" className={styles.submitBtn} size="lg">
         {btnText}
      </Button>
   );
};

export default SubmitButton;
