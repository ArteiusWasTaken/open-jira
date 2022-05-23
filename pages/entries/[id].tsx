import {
  Card,
  CardHeader,
  Grid,
  CardContent,
  TextField,
  CardActions,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  capitalize,
  IconButton,
} from "@mui/material";
import { Layout } from "../../components/layouts";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { EntryStatus } from "../../interfaces";
import { ChangeEvent, useMemo, useState } from "react";
import { GetServerSideProps } from "next";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

export const EntryPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<EntryStatus>("pending");
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };
  const onSave = () => {};

  return (
    <Layout title=" ... ... ... ">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputValue}`}
              subheader={`Creada hace: --- minutos`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueca entrada"
                autoFocus
                multiline
                label="Nueva entrada"
                value={inputValue}
                onChange={onInputValueChange}
                helperText={isNotValid && "Ingrese un Valor"}
                onBlur={() => setTouched(true)}
                error={isNotValid}
              />

              <FormControl>
                <FormLabel>Estado: </FormLabel>
                <RadioGroup row value={status} onChange={onStatusChanged}>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "red",
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default EntryPage;
