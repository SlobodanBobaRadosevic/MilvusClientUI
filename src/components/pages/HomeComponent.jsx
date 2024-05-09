import React, { useState, useEffect } from "react";
import MaterialTable from "../MaterialTableComponent";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import SearchClient from "../../api-service/search-api/search";
import LoadingSpinner from "../loader/Loader.component";

const HomeComponent = () => {
  const searchClient = new SearchClient();
  const [globalSearch, setGlobalSearch] = useState("");
  const [title, setTitle] = useState("");
  const [readingTimeOperator, setReadingTimeOperator] = useState("=");
  const [readingTimeValue, setReadingTimeValue] = useState("");
  const [publication, setPublication] = useState("");

  const [indexType, setIndexType] = useState("");
  const [metric, setMetric] = useState("");
  const [nlist, setNlist] = useState("");

  const [tableData, setTableData] = useState([]);

  const [showLoader, setShowLoader] = useState(false);

  const handleIndexTypeChange = (event) => {
    setIndexType(event.target.value);
  };

  const handleMetricChange = (event) => {
    setMetric(event.target.value);
  };

  const CreateIndex = async () => {
    setShowLoader(true);
    let response = await searchClient.create_index(
      JSON.stringify({
        collection_name: "books",
        field_name: "title_vector",
        index_params: {
          metric_type: metric,
          index_type: indexType,
          params: {
            nlist: nlist,
          },
        },
      })
    );
    console.log(response);
    setShowLoader(false);
  };

  const SetSearch = async () => {
    setShowLoader(true);
    var CollectionName = "books";
    var EmbeddingValue = globalSearch;

    let conditions = [];

    if (title) {
      conditions.push(`title like '${title}%'`);
    }

    if (readingTimeValue) {
      conditions.push(
        `reading_time ${readingTimeOperator} ${readingTimeValue}`
      );
    }

    if (publication) {
      conditions.push(`publication like '${publication}%'`);
    }

    let query = "";
    if (conditions.length > 0) {
      query += conditions.join(" and ");
    }

    let response = await searchClient.search(
      JSON.stringify({
        collection_name: CollectionName,
        embedding_query: EmbeddingValue,
        additional_expression: query,
      })
    );
    setTableData(response);
    console.log(response);

    setShowLoader(true);
  };

  const columns = [
    { id: "id", label: "Id" },
    { id: "score", label: "Score" },
    { id: "title", label: "Title" },
    { id: "link", label: "Link" },
    { id: "readingTime", label: "ReadingTime" },
    { id: "publication", label: "Publication" },
    { id: "claps", label: "Claps" },
  ];

  return (
    <>
      {showLoader && <LoadingSpinner />}
      <Container className="custom-container" component={Paper}>
        <h2>Search</h2>
        <div className="m-flex-div">
          <TextField
            fullWidth
            label="Global Search"
            value={globalSearch}
            onChange={(event) => setGlobalSearch(event.target.value)}
          />
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <div className="flex-100">
            <Select
              value={readingTimeOperator}
              onChange={(event) => setReadingTimeOperator(event.target.value)}
            >
              <MenuItem value="=">=</MenuItem>
              <MenuItem value=">">{">"}</MenuItem>
              <MenuItem value="<">{"<"}</MenuItem>
            </Select>
            <TextField
              fullWidth
              label="Reading Time"
              value={readingTimeValue}
              type="number"
              onChange={(event) => setReadingTimeValue(event.target.value)}
            />
          </div>
          <TextField
            fullWidth
            label="Publication"
            value={publication}
            onChange={(event) => setPublication(event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => SetSearch()}
            className="m-primary-btn c-height"
          >
            Search
          </Button>
        </div>
      </Container>
      <Container className="custom-container" component={Paper}>
        <MaterialTable columns={columns} data={tableData} />
      </Container>
      <Container className="custom-container" component={Paper}>
        <h2>Create Index</h2>
        <div className="m-flex-div">
          <FormControl fullWidth>
            <InputLabel id="index-type-label">Index Type</InputLabel>
            <Select
              labelId="index-type-label"
              id="index-type-select"
              label="Index Type"
              value={indexType}
              onChange={handleIndexTypeChange}
            >
              <MenuItem value="FLAT">FLAT</MenuItem>
              <MenuItem value="IVF_FLAT">IVF_FLAT</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="metric-label">Metric</InputLabel>
            <Select
              labelId="metric-label"
              id="metric-select"
              label="Metric"
              value={metric}
              onChange={handleMetricChange}
            >
              <MenuItem value="L2">L2</MenuItem>
              <MenuItem value="IP">IP</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Nlist"
            fullWidth
            onChange={(event) => setNlist(event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className="m-primary-btn"
            onClick={() => CreateIndex()}
          >
            Create Index
          </Button>
        </div>
      </Container>
    </>
  );
};

export default HomeComponent;
