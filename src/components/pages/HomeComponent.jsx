import React, { useState } from "react";
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

const HomeComponent = () => {
  const searchClient = new SearchClient();
  const [globalSearch, setGlobalSearch] = useState("");
  const [id, setId] = useState("");
  const [score, setScore] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [readingTimeOperator, setReadingTimeOperator] = useState("=");
  const [readingTimeValue, setReadingTimeValue] = useState("");
  const [clapsOperator, setClapsOperator] = useState("=");
  const [clapsValue, setClapsValue] = useState("");
  const [publication, setPublication] = useState("");
  const [indexType, setIndexType] = useState("");
  const [metric, setMetric] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleIndexTypeChange = (event) => {
    setIndexType(event.target.value);
  };

  const handleMetricChange = (event) => {
    setMetric(event.target.value);
  };

  const SetSearch = async () => {
    var CollectionName = globalSearch;
    var EmbeddingValue = "Embed";
    var AdditionalQuery = "123";
    let response = await searchClient.SetSearch(
      CollectionName,
      EmbeddingValue,
      AdditionalQuery
    );
    setTableData(response);
  };

  const columns = [
    { id: "Id", label: "Id" },
    { id: "Score", label: "Score" },
    { id: "Title", label: "Title" },
    { id: "Link", label: "Link" },
    { id: "ReadingTime", label: "ReadingTime" },
    { id: "Publication", label: "Publication" },
    { id: "Claps", label: "Claps" },
  ];

  const data = [
    {
      Id: 1,
      Score: "Placeholder",
      Title: "Placeholder",
      Link: "Placeholder",
      ReadingTime: "Placeholder",
      Publication: "Placeholder",
      Claps: "Placeholder",
    },
    {
      Id: 2,
      Score: "Placeholder",
      Title: "Placeholder",
      Link: "Placeholder",
      ReadingTime: "Placeholder",
      Publication: "Placeholder",
      Claps: "Placeholder",
    },
    {
      Id: 3,
      Score: "Placeholder",
      Title: "Placeholder",
      Link: "Placeholder",
      ReadingTime: "Placeholder",
      Publication: "Placeholder",
      Claps: "Placeholder",
    },
    {
      Id: 4,
      Score: "Placeholder",
      Title: "Placeholder",
      Link: "Placeholder",
      ReadingTime: "Placeholder",
      Publication: "Placeholder",
      Claps: "Placeholder",
    },
    {
      Id: 5,
      Score: "Placeholder",
      Title: "Placeholder",
      Link: "Placeholder",
      ReadingTime: "Placeholder",
      Publication: "Placeholder",
      Claps: "Placeholder",
    },
    {
      Id: 6,
      Score: "Placeholder",
      Title: "Placeholder",
      Link: "Placeholder",
      ReadingTime: "Placeholder",
      Publication: "Placeholder",
      Claps: "Placeholder",
    },
    {
      Id: 7,
      Score: "Placeholder",
      Title: "Placeholder",
      Link: "Placeholder",
      ReadingTime: "Placeholder",
      Publication: "Placeholder",
      Claps: "Placeholder",
    },
    {
      Id: 8,
      Score: "Placeholder",
      Title: "Placeholder",
      Link: "Placeholder",
      ReadingTime: "Placeholder",
      Publication: "Placeholder",
      Claps: "Placeholder",
    },
    {
      Id: 9,
      Score: "Placeholder",
      Title: "Placeholder",
      Link: "Placeholder",
      ReadingTime: "Placeholder",
      Publication: "Placeholder",
      Claps: "Placeholder",
    },
    {
      Id: 10,
      Score: "Placeholder",
      Title: "Placeholder",
      Link: "Placeholder",
      ReadingTime: "Placeholder",
      Publication: "Placeholder",
      Claps: "Placeholder",
    },
  ];

  const handleSearch = () => {};

  return (
    <>
      <Container className="custom-container" component={Paper}>
        <h2>Search</h2>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Global Search"
                value={globalSearch}
                onChange={(event) => setGlobalSearch(event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Id"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Score"
                value={score}
                onChange={(event) => setScore(event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Link"
                value={link}
                onChange={(event) => setLink(event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <div className="flex-div">
                <Select
                  value={readingTimeOperator}
                  onChange={(event) =>
                    setReadingTimeOperator(event.target.value)
                  }
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
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Publication"
                value={publication}
                onChange={(event) => setPublication(event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <div className="flex-div">
                <Select
                  value={clapsOperator}
                  onChange={(event) => setClapsOperator(event.target.value)}
                >
                  <MenuItem value="=">=</MenuItem>
                  <MenuItem value=">">{">"}</MenuItem>
                  <MenuItem value="<">{"<"}</MenuItem>
                </Select>
                <TextField
                  fullWidth
                  label="Claps"
                  value={clapsValue}
                  type="number"
                  onChange={(event) => setClapsValue(event.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={12} className="text-right">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSearch}
                className="m-primary-btn c-height m-r-15"
              >
                Clear Search
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => SetSearch()}
                className="m-primary-btn c-height"
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container className="custom-container" component={Paper}>
        <MaterialTable columns={columns} data={data} />
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
              <MenuItem value="Type1">Type 1</MenuItem>
              <MenuItem value="Type2">Type 2</MenuItem>
              <MenuItem value="Type3">Type 3</MenuItem>
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
              <MenuItem value="Metric1">Metric 1</MenuItem>
              <MenuItem value="Metric2">Metric 2</MenuItem>
              <MenuItem value="Metric3">Metric 3</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Nlist" fullWidth />
          <TextField label="Nprobe" fullWidth />
          <Button variant="contained" color="primary" className="m-primary-btn">
            Create Index
          </Button>
        </div>
      </Container>
    </>
  );
};

export default HomeComponent;
