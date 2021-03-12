import { gql } from "@apollo/client";



export const LOAD_COLORS = gql`
  query MyQuery {
    Colors {
      hex_val
      id
      label
    }
  }
`;

export const COLORS_SUBSCRIPTION = gql`
  subscription MySubscription {
    Colors {
      hex_val
      label
    }
  }
`;