import { useFieldArray } from "react-hook-form";
import DataTable from "../../../components/data-table";
import { IconButton, TextField } from "@mui/material";
import Icon from "../../../components/icon";
import { convertWithCommas } from "../../../ultis/number";

export default function ItemSettingTable({
  register,
  control,
  watch,
  setValue,
}) {
  const { fields, remove } = useFieldArray({
    control,
    name: "items",
  });

  const columns = [
    {
      field: "id",
      headerName: "#",
      align: "left",
      width: 20,
      renderCell: (_, index) => index + 1,
    },
    {
      field: "name",
      headerName: "Sản phẩm",
      align: "left",
      width: 150,
    },
    {
      field: "price",
      headerName: "Giá",
      align: "left",
      width: 100,
      renderCell: (params) => {
        return `${convertWithCommas(params.row?.price)} đ`;
      },
    },
    {
      field: "quantity",
      headerName: "Số lượng",
      align: "left",
      width: 100,
      renderCell: (params, index) => {
        return (
          <TextField
            {...register(`items[${index}].quantity`)}
            type="number"
            onChange={(e) =>
              setValue(
                `items[${index}].total`,
                +e.target.value * +params.row?.price
              )
            }
          />
        );
      },
    },
    {
      field: "total",
      headerName: "Tổng phụ",
      align: "left",
      width: 100,
      renderCell: (_, index) => {
        const total = watch(`items[${index}].total`) || 0;
        return `${convertWithCommas(total)} đ`;
      },
    },
    {
      field: "action",
      headerName: "",
      width: 20,
      renderCell: (_, index) => {
        return (
          <IconButton onClick={() => remove(index)}>
            <Icon name="remove" />
          </IconButton>
        );
      },
    },
  ];

  return <DataTable columns={columns} rows={fields} />;
}
