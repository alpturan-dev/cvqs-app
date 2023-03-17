import { TableVirtuoso } from 'react-virtuoso'
import React from 'react'
import { Button } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from "react-i18next";

export default function App({ defectList }) {

    const { t } = useTranslation();

    const columns = [
        {
            width: 40,
            label: t('notifier'),
            dataKey: 'depCode',
        },
        {
            width: 15,
            label: 'Body No',
            dataKey: 'bodyNo',
            numeric: true,
        },
        {
            width: 15,
            label: 'Assy No',
            dataKey: 'assyNo',
            numeric: true,
        },
        {
            width: 60,
            label: t('vinNo'),
            dataKey: 'vinNo',
            numeric: true,
        },
        {
            width: 10,
            label: t('color'),
            dataKey: 'colorExtCode',
            numeric: true,
        },
        {
            width: 40,
            label: t('model'),
            dataKey: 'modelCode',
            numeric: true,
        },
        {
            width: 40,
            label: t('registration'),
            dataKey: 'localId',
            numeric: true,
        },
        {
            width: 60,
            label: t('part'),
            dataKey: 'partName',
            numeric: true,
        },
        // {
        //     width: 10,
        //     label: 'Spot',
        //     dataKey: 'spotId',
        //     numeric: true,
        // },
        // {
        //     width: 10,
        //     label: 'Gun',
        //     dataKey: 'spotgunId',
        //     numeric: true,
        // },
        // {
        //     width: 10,
        //     label: 'Arc',
        //     dataKey: 'arcnutboltId',
        //     numeric: true,
        // },
        // {
        //     width: 10,
        //     label: 'ArcGun',
        //     dataKey: 'arcnutboltgunId',
        //     numeric: true,
        // },
        // {
        //     width: 70,
        //     label: 'Hata',
        //     dataKey: 'defectReason',
        //     numeric: true,
        // },
        // {
        //     width: 40,
        //     label: 'Rank',
        //     dataKey: 'defRankCode',
        //     numeric: true,
        // },
        {
            width: 40,
            label: t('time'),
            dataKey: 'formattedDefectHour',
            numeric: true,
        },
        {
            width: 40,
            label: t('defectType'),
            dataKey: 'defectType',
            numeric: true,
        },
        {
            width: 50,
            label: t('defectResponsible'),
            dataKey: 'defrespName',
            numeric: true,
        },
        {
            width: 40,
            label: t('subResponsible'),
            dataKey: 'partCode1',
            numeric: true,
        },
        {
            width: 60,
            label: 'NR SEASON',
            dataKey: 'nrReasonId',
            numeric: true,
        },
        {
            width: 30,
            label: t('save'),
            dataKey: 'save',
            numeric: true,
        },
        {
            width: 50,
            label: t('process'),
            dataKey: 'process',
            numeric: true,
        },
    ];

    return (
        <TableVirtuoso
            style={{ height: 680 }}
            data={defectList}
            components={{
                Scroller: React.forwardRef((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),
                Table: (props) => <Table {...props} style={{ borderCollapse: 'separate' }} />,
                TableHead: TableHead,
                TableRow: TableRow,
                TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
            }}
            fixedHeaderContent={() => {
                return (
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell
                                key={index}
                                sx={{
                                    fontSize: "0.9rem",
                                    fontWeight: "bolder",
                                    width: column.width,
                                    height: "30px",
                                    backgroundColor: 'secondary.main',
                                    color: "primary.main",
                                }}>
                                {column.label}
                            </TableCell>
                        )
                        )}
                    </TableRow>
                )
            }}
            itemContent={(i, item) => {
                return (
                    columns.map((column, index) => {
                        switch (column.dataKey) {
                            case "colorExtCode":
                                return (
                                    <TableCell
                                        key={index}
                                        sx={{ width: column.width, backgroundColor: item.rgbCode }}>
                                        {item[column.dataKey]}
                                    </TableCell>
                                );
                            case "save":
                                return (
                                    <TableCell
                                        key={index}
                                        sx={{
                                            width: column.width, textAlign: "center"
                                        }}>
                                        <SaveIcon
                                            sx={{
                                                cursor: "pointer", padding: "5px 5px", width: "20px", height: "20px", backgroundColor: "black", color: "white"
                                            }} />
                                    </TableCell>
                                );
                            case "process":
                                return (
                                    <TableCell
                                        key={index}
                                        sx={{
                                            width: column.width,
                                            textAlign: "center"
                                        }}>
                                        <EditIcon
                                            sx={{
                                                cursor: "pointer",
                                                padding: "5px 5px",
                                                width: "20px",
                                                height: "20px",
                                                backgroundColor: "primary.red",
                                                color: "white"
                                            }} />
                                        <DeleteIcon
                                            sx={{
                                                cursor: "pointer", padding: "5px 5px", width: "20px", height: "20px", backgroundColor: "primary.red", color: "white"
                                            }} />
                                    </TableCell>
                                );
                            default:
                                return (
                                    <TableCell
                                        key={index}
                                        sx={{ width: column.width }}>
                                        {item[column.dataKey]}
                                    </TableCell>
                                )
                        }
                    }
                    )
                )
            }
            }
        />
    )
}

