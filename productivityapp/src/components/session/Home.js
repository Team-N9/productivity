import React from 'react';
import Box from '@material-ui/core/Box';

export default function Home() {
    return (
        <Box display='flex' flexDirection="row" justifyContent="space-between">
            <Box>
                First column
            </Box>
            <Box>
                Second column
            </Box>
            <Box>
                Third column
            </Box>
        </Box>
    )
}
