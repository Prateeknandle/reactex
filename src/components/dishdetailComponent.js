import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText,  Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

   function RenderDish({dish}){
        if(dish == null){
            return(<div></div>);
        }
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />                    
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

   function RenderComments({comments}){
        if(comments == null){
            return(<div></div>);
        }
        const showcmnts = comments.map((cmnt) => {
            return(
                <li key={cmnt.id}>
                    <p>{cmnt.comment}</p>
                    <p>--{cmnt.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(cmnt.date))}
                    </p>
                </li>
            );
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {showcmnts}
                </ul>
            </div>
        );
    }

    const DishDetail = (props)=>{
        if(props.dish == null){
            return(<div></div>);
        }
        return(
            <div className="container">
                  <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
              <RenderDish dish={props.dish} />
              <RenderComments comments={props.comments} />
            </div>
            </div>
        );
    }


export default DishDetail;