import styled from "styled-components";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import IconAndTitleText from "./ui-components/IconAndTitleText";
import Avatar from "./ui-components/Avatar";
import HorizontalStack from "./ui-components/HorizontalStack";
import Image from "next/image";
import Shortcut from "./ui-components/Shortcut";

const TableContainer = styled.table`
  margin-top: 20px;
  border-radius: var(--surface-radius);
  border: 1px solid var(--surface-border);
  width: 100%;
  padding: var(--padding);
  color: var(--heading-font-color);
`;
const TableHeaderContainer = styled.thead`
  font-weight: 400;
  color: var(--overline-font-color);
`;
const TableBodyContainer = styled.tbody`
  text-align: center;
`;
const TableFooterContainer = styled.tfoot`
  text-align: right;
  font-weight: 700;
`;
const TableRowContainer = styled.tr`
  border-bottom: 1px solid var(--surface-border);
`;
const TableDataContainer = styled.td`
  padding: 4px;
  margin: 5px;
  border: 1px solid var(--surface-border);
`;

const TableHeadContainer = styled.th`
  padding: 4px;
  margin: 5px;
  border: 1px solid var(--surface-border);
`;

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      brandLogo: "FaWix",
      brand: "Wix",
      description: "Develop a personalized...",
      members: ["male-user", "female-user", "male-user"],
      categories: ["Automation"],
      tags: ["#DigitalTransform", "#Website"],
      nextMeeting: "in 30 minutes",
    },
    {
      id: 2,
      brandLogo: "FaShopify",
      brand: "Shopify",
      description: "Introduce a cloud based...",
      members: ["male-user", "female-user", "male-user", "female-user"],
      categories: ["E-Commerce", "B2B"],
      tags: ["#ElectronicCommerce", "#Sell"],
      nextMeeting: "Tomorrow",
    },
    {
      id: 3,
      brandLogo: "FaMailchimp",
      brand: "Mailchimp",
      description: "Develop a mailing app aimin...",
      members: ["male-user"],
      categories: ["SASS"],
      tags: ["#Marketing", "#Automation"],
      nextMeeting: "Tomorrow",
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  // Toggle select all checkboxes
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  // Toggle individual checkbox
  const handleCheckboxChange = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setData(updatedData);
  };

  return (
    <TableContainer>
      <TableHeaderContainer>
        <TableRowContainer>
          <TableHeadContainer>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
          </TableHeadContainer>
          <TableHeadContainer>Brand</TableHeadContainer>
          <TableHeadContainer>Description</TableHeadContainer>
          <TableHeadContainer>Members</TableHeadContainer>
          <TableHeadContainer>Categories</TableHeadContainer>
          <TableHeadContainer>Tags</TableHeadContainer>
          <TableHeadContainer>Next Meeting</TableHeadContainer>
          <TableHeadContainer>
            <FaPlus />
          </TableHeadContainer>
        </TableRowContainer>
      </TableHeaderContainer>
      <TableBodyContainer>
        {data.map((item) => (
          <TableRowContainer key={item.id}>
            <TableDataContainer>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleCheckboxChange(item.id)}
              />
            </TableDataContainer>
            <TableDataContainer>
              <IconAndTitleText>
                {item.brandLogo === "FaWix" ? (
                  <FaWix />
                ) : item.brandLogo === "FaShopify" ? (
                  <FaShopify />
                ) : (
                  <FaMailchimp />
                )}
                {item.brand}
              </IconAndTitleText>
            </TableDataContainer>
            <TableDataContainer>{item.description}</TableDataContainer>
            <TableDataContainer>
              <HorizontalStack center>
                {item.members.map((member, index) => (
                  <Avatar key={index}>
                    <Image
                      src={`/${member}.png`}
                      alt="member"
                      width={20}
                      height={20}
                      priority
                    />
                  </Avatar>
                ))}
              </HorizontalStack>
            </TableDataContainer>
            <TableDataContainer>
              <HorizontalStack gap="5px" center>
                {item.categories.map((category, index) => (
                  <Shortcut
                    key={index}
                    keyOne={category}
                    operatorKey={""}
                    keyTwo={""}
                  />
                ))}
              </HorizontalStack>
            </TableDataContainer>
            <TableDataContainer>
              <HorizontalStack gap="5px" center>
                {item.tags.map((tag, index) => (
                  <Shortcut
                    key={index}
                    keyOne={tag}
                    operatorKey={""}
                    keyTwo={""}
                  />
                ))}
              </HorizontalStack>
            </TableDataContainer>
            <TableDataContainer>
              <Shortcut
                keyOne={item.nextMeeting}
                operatorKey={""}
                keyTwo={""}
              />
            </TableDataContainer>
            <TableDataContainer></TableDataContainer>
          </TableRowContainer>
        ))}
      </TableBodyContainer>
      <TableFooterContainer>
        <TableRowContainer>
          <TableDataContainer colSpan="2">Count</TableDataContainer>
          <TableDataContainer colSpan="1"></TableDataContainer>
          <TableDataContainer>summary</TableDataContainer>
          <TableDataContainer colSpan="1"></TableDataContainer>
          <TableDataContainer colSpan="1"></TableDataContainer>
          <TableDataContainer colSpan="1"></TableDataContainer>
        </TableRowContainer>
      </TableFooterContainer>
    </TableContainer>
  );
};

export default Table;
