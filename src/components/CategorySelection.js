import React from "react";
import { Form } from "react-bootstrap";

function CategorySelection({ category, onCategoryChange }) {
    const categories = [
        { value: "general", label: "General" },
        { value: "business", label: "Business" },
        { value: "entertainment", label: "Entertainment" },
        { value: "health", label: "Health" },
        { value: "science", label: "Science" },
        { value: "sports", label: "Sports" },
        { value: "technology", label: "Technology" }];

        return (
            <Form>
                <Form.Group controlId="categorySelection">
                    <Form.Label>Select a Category</Form.Label>
                    <Form.Control as="select" value={category} onChange={e => onCategoryChange(e.target.value)}>
                        {categories.map((category) => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                            ))}
                            </Form.Control>
                            </Form.Group>
            </Form>
            );
}

export default CategorySelection;