import Select, {
  Menu,
  Option,
  Button,
  ParamsManager,
  State,
} from "./Components/Select01";
import styles from "./Select01.module.scss";

const CustomButton = () => {
  const onOpen = (open: State["open"]) => {
    console.log("CustomButton onOpen", open);
  };
  return (
    <>
      <Button
        placeholder="placeholder"
        className={styles.button}
        styles={{ open: styles.open }}
      />
      <ParamsManager onOpen={onOpen} />
    </>
  );
};

type OptionType = {
  label: string;
  value: string;
};

type Props = {
  options: OptionType[];
};

const CustomMenu = ({ options }: Props) => {
  const onOptions = (options: State["options"]) => {
    console.log("CustomMenu onOptions", options);
  };
  return (
    <>
      <ParamsManager onOptions={onOptions} />
      <Menu
        className={styles.menu}
        emptyValue={"zero"}
        portal={true}
        styles={{ open: styles.open, }}
      >
        <Option
          label={"empty option"}
          value={"zero"}
          className={styles.option}
          styles={{ selected: styles.selected, hover: styles.hover }}
        />
        {options.map(({ label, value }) => (
          <Option
            label={label}
            value={value}
            key={value}
            className={styles.option}
            styles={{ selected: styles.selected, hover: styles.hover }}
          />
        ))}
      </Menu>
    </>
  );
};

const CustomSelect = ({ options }: Props) => {
  return (
    <Select className={styles.select}>
      <CustomButton />
      <CustomMenu options={options} />
    </Select>
  );
};

export default CustomSelect;
