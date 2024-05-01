import { Table } from "@mantine/core";

export default function MantineTable({ rows, tableHeading }) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {/* <Table.Th>Element position</Table.Th> */}
          {tableHeading.map((x) => {
            return <Table.Th>{x}</Table.Th>;
          })}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
