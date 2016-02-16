<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet  version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="Form">

    <div class="container">
      <ul class="nav nav-tabs">
        <xsl:for-each select="Tabs/Tab">
          <xsl:choose>
            <xsl:when test="position() = 1">
              <xsl:apply-templates select="." mode="TabFirst" />
            </xsl:when>
            <xsl:otherwise>
              <xsl:apply-templates select="."/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:for-each>
      </ul>

      <form id="{@Name}" action="{@Action}" method="{@Method}" class="form-horizontal"
    data-fv-framework="bootstrap"
    data-fv-icon-valid="glyphicon glyphicon-ok"
    data-fv-icon-invalid="glyphicon glyphicon-remove"
    data-fv-icon-validating="glyphicon glyphicon-refresh"
		  >
        <div class="tab-content">

          <xsl:for-each select="Tabs/Tab">
            <xsl:choose>
              <xsl:when test="position() = 1">
                <xsl:apply-templates select="." mode="TabContentFirst" />
              </xsl:when>
              <xsl:otherwise>
                <xsl:apply-templates select="." mode="TabContent"/>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:for-each>
        </div>

        <div class="form-group" style="margin-top: 15px;">
          <div class="col-xs-5 col-xs-offset-3">
            <button type="clear" class="btn btn-gray">Clear</button>
            <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </div>
      </form>

      <hr/>
    </div>
    <!-- /container -->

    <script>
      <!--TODO: script -->
      $('#<xsl:value-of select="@Name"/>').formValidation();
    </script>

  </xsl:template>

  <xsl:template match="Tab" mode="TabFirst">
    <li class="active">
      <a href="#{@Name}-tab" data-toggle="tab">
        <xsl:value-of select="@Name"/>
        <i class="fa"></i>
      </a>
    </li>
  </xsl:template>

  <xsl:template match="Tab">
    <li>
      <a href="#{@Name}-tab" data-toggle="tab">
        <xsl:value-of select="@DisplayName"/>
        <i class="fa"></i>
      </a>
    </li>
  </xsl:template>

  <xsl:template match="Tab" mode="TabContent">
    <div class="tab-pane" id="{@Name}-tab">
      <xsl:for-each select="Fields/*">
        <xsl:apply-templates select="." />
      </xsl:for-each>
    </div>
  </xsl:template>

  <xsl:template match="Tab" mode="TabContentFirst">
    <div class="tab-pane active" id="{@Name}-tab">
      <xsl:for-each select="Fields/*">
        <xsl:apply-templates select="." />
      </xsl:for-each>
    </div>
  </xsl:template>

  <xsl:template match="RegularExpression">
    <xsl:attribute name="data-fv-regexp">true</xsl:attribute>
    <xsl:attribute name="data-fv-regexp-regexp">
      <xsl:value-of select="@Expression"/>
    </xsl:attribute>
    <xsl:attribute name="data-fv-regexp-message">
      <xsl:value-of select="@ErrorText"/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="Required">
    <xsl:attribute name="data-fv-notempty">true</xsl:attribute>
    <xsl:attribute name="data-fv-notempty-message">
      <xsl:value-of select="@ErrorText"/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="Range">
    <xsl:attribute name="data-fv-stringlength">true</xsl:attribute>
    <xsl:attribute name="data-fv-stringlength-min">
      <xsl:value-of select="@MinimumValue"/>
    </xsl:attribute>
    <xsl:attribute name="data-fv-stringlength-max">
      <xsl:value-of select="@MaximumValue"/>
    </xsl:attribute>
    <xsl:attribute name="data-fv-notempty-message">
      <xsl:value-of select="@ErrorText"/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="SimpleField">
    <div class="form-group">
      <label class="col-xs-3 control-label" for="{@Name}">
        <xsl:value-of select="@DisplayName"/>
      </label>
      <div class="col-xs-5">
        <xsl:choose>
          <xsl:when test="@Type='Text'">
            <input type="text" class="form-control" name="{@Name}" id="{@Name}">
              <xsl:for-each select="Rules/*">
                <xsl:apply-templates select="."></xsl:apply-templates>
              </xsl:for-each>
            </input>
          </xsl:when>
          <xsl:when test="@Type='Password'">
            <input type="password" class="form-control" name="{@Name}" id="{@Name}" >
              <xsl:for-each select="Rules/*">
                <xsl:apply-templates select="."></xsl:apply-templates>
              </xsl:for-each>
            </input>
          </xsl:when>
          <xsl:when test="@Type='Email'">
            <input type="email" class="form-control" name="{@Name}" id="{@Name}">
              <xsl:for-each select="Rules/*">
                <xsl:apply-templates select="."></xsl:apply-templates>
              </xsl:for-each>
            </input>
          </xsl:when>
          <xsl:when test="@Type='Color'">
            <input type="color" class="form-control" name="{@Name}" id="{@Name}" >
              <xsl:for-each select="Rules/*">
                <xsl:apply-templates select="."></xsl:apply-templates>
              </xsl:for-each>
            </input>
          </xsl:when>
          <xsl:when test="@Type='Document'">
            <input type="file" class="form-control" name="{@Name}" id="{@Name}">
              <xsl:for-each select="Rules/*">
                <xsl:apply-templates select="."></xsl:apply-templates>
              </xsl:for-each>
            </input>
          </xsl:when>
          <xsl:when test="@Type='Date'">
            <input type="date" class="form-control" name="{@Name}" id="{@Name}" >
              <xsl:for-each select="Rules/*">
                <xsl:apply-templates select="."></xsl:apply-templates>
              </xsl:for-each>
            </input>
          </xsl:when>
          <xsl:when test="@Type='DateTime'">
            <input type="datetime" class="form-control" name="{@Name}" id="{@Name}" >
              <xsl:for-each select="Rules/*">
                <xsl:apply-templates select="."></xsl:apply-templates>
              </xsl:for-each>
            </input>
          </xsl:when>
          <xsl:when test="@Type='TextArea'">
            <textarea class="form-control" rows="3" name="{@Name}" id="{@Name}">
              <xsl:for-each select="Rules/*">
                <xsl:apply-templates select="."></xsl:apply-templates>
              </xsl:for-each>
            </textarea>
          </xsl:when>
        </xsl:choose>
      </div>
    </div>
  </xsl:template>

  <xsl:template match="ComplexField">
    <div class="form-group">
      <label class="col-xs-3 control-label" for="{@Name}">
        <xsl:value-of select="@DisplayName"/>
      </label>
      <div class="col-xs-5">
        <xsl:choose>
          <xsl:when test="@Type='CheckBox'">
            <xsl:for-each select="Items/Item">
              <xsl:call-template name="CheckBoxItem">

              </xsl:call-template>
            </xsl:for-each>
          </xsl:when>
          <xsl:when test="@Type='RadioButton'">
            <xsl:variable name="FormName" select="@Name"/>
            <xsl:for-each select="Items/Item">
              <xsl:call-template name="RadioButtonItem">
                <xsl:with-param name="FormName" select="$FormName"></xsl:with-param>
                <xsl:with-param name="Position" select="position()"></xsl:with-param>
              </xsl:call-template>
            </xsl:for-each>
          </xsl:when>
          <xsl:when test="@Type='DropDown'">
            <select name="{@Name}" id="{@Name}" placeholder="{@DisplayName}" class="form-control">
              <xsl:for-each select="Items/Item">
                <xsl:apply-templates select="." mode="DropDownItem"/>
              </xsl:for-each>
            </select>
          </xsl:when>
          <xsl:otherwise>
            <input type="text" class="form-control" name="{@Name}" id="{@Name}" />
          </xsl:otherwise>
        </xsl:choose>
      </div>
    </div>
  </xsl:template>

  <xsl:template match="Item" mode="DropDownItem">
    <option value="{@Value}">
      <xsl:value-of select="@Name"/>
    </option>
  </xsl:template>

  <xsl:template name="RadioButtonItem">
    <xsl:param name="FormName"/>
    <xsl:param name="Position"/>
    <div class="radio">
      <label>
        <input type="radio" name="{$FormName}" id="{$FormName}{$Position}" value="{@Value}" />
        <xsl:value-of select="@Name"/>
      </label>
    </div>
  </xsl:template>

  <xsl:template name="CheckBoxItem">
    <div class="checkbox">
      <label>
        <input type="checkbox" value="@Value" />
        <xsl:value-of select="@Name"/>
      </label>
    </div>
  </xsl:template>

</xsl:stylesheet>
