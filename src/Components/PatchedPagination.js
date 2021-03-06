/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TablePagination } from '@material-ui/core';

const PatchedPagination = function (props) {
  const {
    ActionsComponent,
    onChangePage,
    onChangeRowsPerPage,
    ...tablePaginationProps
  } = props;

  return (
    <TablePagination
      {...tablePaginationProps}
      // @ts-expect-error onChangePage was renamed to onPageChange
      onPageChange={onChangePage}
      onRowsPerPageChange={onChangeRowsPerPage}
      // eslint-disable-next-line react/no-unstable-nested-components
      ActionsComponent={subprops => {
        const { onPageChange, ...actionsComponentProps } = subprops;
        return (
          // @ts-expect-error ActionsComponent is provided by material-table
          <ActionsComponent
            {...actionsComponentProps}
            onChangePage={onPageChange}
          />
        );
      }}
    />
  );
};

export default PatchedPagination;
