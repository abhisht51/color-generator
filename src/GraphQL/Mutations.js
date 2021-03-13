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

export const REMOVE_COLOR = gql`
  mutation RemoveMutation($hex_val: String!) {
    delete_Colors_by_pk(hex_val: $hex_val) {
      hex_val
    }
  }
`;

export const SET_LABEL = gql`
  mutation SetLabel(
      $hex_val: String!
      $label: String!
    ) {
    update_Colors_by_pk(
      pk_columns: { hex_val: $hex_val }
      _set: { label: $label }
    ) {
      label
    }
  }
`;
