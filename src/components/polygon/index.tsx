import styled from 'styled-components';

import { VmComponent } from '@/components/vm/VmComponent';

const Container = styled.div`
    height: 100vh;
`;


export function LinktreeBOS() {
    return (
        <Container>
            <VmComponent
                src="ndcplug.near/widget/Linktree.Main"
                props={{accountId: process.env.REACT_APP_ACCOUNT_ID}}
            />
        </Container>
    )
}