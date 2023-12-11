import { fetchData } from "../utils/web-requests";
import Button from '@mui/material/Button';

export default function Admin() {

    return (
        <div>
            Admin page for dev tools and experiments.
            <div style={{marginTop: 10}}>
                API Test
                <Button variant="contained" style={{margin: 10}} onClick={ fetchData }> Call API </Button>
            </div>
        </div>
      );
}