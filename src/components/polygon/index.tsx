import styled from 'styled-components';

import { VmComponent } from '@/components/vm/VmComponent';

const Container = styled.div`
    height: 100vh;
`;


export function PolygonZkEVM() {
    return (
        <Container>
            <VmComponent
                src="ndcplug.near/widget/Linktree.Main"
                props={{accountId: process.env.ACCOUNT_ID}}
            />
        </Container>
    )
}