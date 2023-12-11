
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import Button from '@mui/material/Button';

export default function FindGame() {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    Finding Game!
                    <Button variant="contained" onClick={signOut}> Sign Out </Button>
                </div>
            )}
        </Authenticator>
    );
}