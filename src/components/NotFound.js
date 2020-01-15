import React from 'react';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'


function NotFound() {

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Page Not Found :\ </h2>
            <Link to="/products" style={{textDecoration: 'none'}}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{width: '15rem', display: 'block', margin: 'auto'}}
                >
                    GET ME OUT OF HERE!!!
            </Button>
            </Link>

        </div >
    )

}

export default NotFound
