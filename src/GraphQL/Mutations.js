import { gql } from "@apollo/client";

export const GENERATE_COLOR_MUTATION = gql`
  mutation MyMutation($hex_val: String!, $label: String!) {
    insert_Colors(
      objects: { hex_val: $hex_val, label: $label }
      on_conflict: { constraint: Colors_pkey, update_columns: hex_val }
    ) {
      affected_rows
    }
  }
`;

